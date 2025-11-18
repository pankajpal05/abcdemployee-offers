//generate-otp
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import CryptoJS from "crypto-js";
import { decryptData } from "@/utils/decryption";
import { saveToDB } from "@/lib/savedb";
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const decryptedExpertData = decryptData(body);
        const {
            fullName,
            emailId,
            companyName,
            pincode,
            mobileNumber,
            productcategory,
            productname,
            productcode,
            browserName,
            GAClient_Idc
        } = decryptedExpertData;
        const key = CryptoJS.enc.Utf8.parse(`${process.env.NEXT_PUBLIC_PUSH_LEAD_KEY}`);
        const iv = CryptoJS.enc.Utf8.parse(`${process.env.NEXT_PUBLIC_PUSH_LEAD_IV}`);
        // Prepare the lead request JSON data
        const pushLeadJSON = {
            compositeRequest: [
                {
                    "method": "POST",
                    "url": "/services/data/v58.0/sobjects/Lead",
                    "referenceId": "refLead1",
                    "body": {
                        "FirstName": "",
                        "LastName": fullName,
                        "Email": emailId,
                        "MobilePhone": mobileNumber,
                        "LeadSource": "Marketing campaigns",
                        "Sub_Source__c": "ABG staff leads",
                        "Product_Category__c": productcategory,
                        "product_name__c": productname,
                        "Browser__c": browserName,
                        "GA_Client_Id__c": GAClient_Idc,
                        "LOB__c": productcode,
                        "Call_Preference__c": "call now",
                        "call_later_time__c": null,
                        "Call_Later_Date__c": null,
                        "central_team_remarks__c": "",
                        "Referrer_Email_ID__c": "",
                        "Referrer_Mobile_Number__c": "",
                        "Referrer_Name__c": "",
                        "registration_year__c": "",
                        "Consent__c": "yes",
                        "Address__PostalCode__s": pincode,
                        "Address__City__s": "",
                        "Vem_assignment_check__c": "",
                        "mf_call_recommendation__c": "",
                        "mf_media_risk_level__c": "",
                        "MF_Trans_ID__c": "",
                        "Employee_ADID__c": "",
                        "Company_Name__c": companyName,
                        "Type_of_Business__c": "service",
                        "UtmADGroup__c": "",
                        "UtmCampaign__c": "",
                        "UtmADID__c": "",
                        "UtmContent__c": "",
                        "UtmId__c": "",
                        "UtmMedium__c": "",
                        "UtmSource__c": "",
                        "UtmTerm__c": "",
                        "Occupations__c": "",
                        "Loan_Amount_Required__c": "",
                        "Loan_Type__c": "",
                        "Campaign_Name__c": "",
                        "Channel_Partner_Code__c": "",
                        "owner_adid__c": "",
                        "RecommendationURL__c": "",
                        "Activity_Type__c": ""
                    }

                }
            ]

        };
        const jsonData = JSON.stringify(pushLeadJSON);
        function encrypt(data: any) {
            const encrypted = CryptoJS.AES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            });
            return encrypted.toString();
        }
        const encryptedData = encrypt(jsonData);
        const cookieStore = await cookies();
        const access_token = cookieStore.get('access_token')
        if (!access_token) {
            return NextResponse.json(
                { error: "Missing access token cookie" },
                { status: 401 }
            );
        }
        const leadURL = process.env.NEXT_PUSH_LEAD_API;
        const pushLeadData = await fetch(`${leadURL}`, {
            method: "POST",
            headers: {
                "auth-token": `${access_token?.value}`,
                "Content-Type": "application/json",
                Cookie: `${process.env.NEXT_PUSH_LEAD_COOKIE}`,
            },
            body: JSON.stringify({
                EncryptedRequest: encryptedData,
            }),
        });
        if (!pushLeadData.ok) {
            const resp = await pushLeadData.json();
            await saveToDB(
                decryptedExpertData,
                false,
                JSON.stringify(resp),
                null
            );
            return NextResponse.json(
                {
                    error: "Unable to add data",
                    statusCode: resp.status,
                    details: resp,
                },
                { status: resp.status }
            );
        }

        const leadResponse = await pushLeadData.json();
        const sfLeadId = leadResponse?.compositeResponse?.[0]?.body?.id || null;
        if(sfLeadId){
             await saveToDB(decryptedExpertData, true, null, sfLeadId);
              return NextResponse.json(
            {
                success: true,
                message: "Lead created successfully",
                data: leadResponse,
            },
            { status: 200 },
        );
        }
        const errorMessage = leadResponse?.compositeResponse?.[0]?.body[0]?.message || "Unknown error";
         await saveToDB(decryptedExpertData, false, errorMessage, null);
        return NextResponse.json(
            {
                success: true,
                message: "Lead created successfully",
                data: leadResponse,
            },
            { status: 200 },
        );
    } catch (error) {
         await saveToDB(null, false, String(error), null);
        return NextResponse.json(
            { error: error || "An unexpected error occurred" },
            { status: 500 },
        );
    }
}

