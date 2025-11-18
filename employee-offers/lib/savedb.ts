import pool from "@/lib/db";

async function saveToDB(data: any, success: boolean, errorMessage: string | null, sfLeadId: string | null) {
    try {
       const query = `
            INSERT INTO leads (
                salesforce_id,
                first_name,
                last_name,
                email,
                mobile_phone,
                lead_source,
                sub_source__c,
                product_category__c,
                product_name__c,
                browser__c,
                ga_client_id__c,
                lob__c,
                call_preference__c,
                call_later_time__c,
                call_later_date__c,
                central_team_remarks__c,
                referrer_email_id__c,
                referrer_mobile_number__c,
                referrer_name__c,
                registration_year__c,
                consent__c,
                address_postalcode__s,
                address_city__s,
                vem_assignment_check__c,
                mf_call_recommendation__c,
                mf_media_risk_level__c,
                mf_trans_id__c,
                employee_adid__c,
                company_name__c,
                type_of_business__c,
                utm_ad_group__c,
                utm_campaign__c,
                utm_adid__c,
                utm_content__c,
                utm_id__c,
                utm_medium__c,
                utm_source__c,
                utm_term__c,
                occupations__c,
                loan_amount_required__c,
                loan_type__c,
                campaign_name__c,
                channel_partner_code__c,
                owner_adid__c,
                recommendationurl__c,
                activity_type__c,
                success,
                error_message
            )
            VALUES (
                $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
                $11,$12,$13,$14,$15,$16,$17,$18,$19,$20,
                $21,$22,$23,$24,$25,$26,$27,$28,$29,$30,
                $31,$32,$33,$34,$35,$36,$37,$38,$39,$40,
                $41,$42,$43,$44,$45,$46,$47,$48
            )
        `;

        const values = [
            sfLeadId,
            data?.firstName || null, 
            data?.fullName || null, 
            data?.emailId || null,
            data?.mobileNumber || null,
            "Marketing campaigns",                        
            "ABG staff leads",                               
            data?.productcategory || null,
            data?.productname || null,
            data?.browserName || null,
            data?.GAClient_Idc || null,
            data?.productcode || null,                      
            "call now",
            null,                                            
            null,                                            
            "",
            "",
            "",
            "",
            "yes",                                           
            data?.pincode || null,
            "",
            "",
            "",
            "",
            "",
            "",
            data?.companyName || null,
            "service",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            data?.recommendationurl || null,
            "",
            success,
            errorMessage
        ];

    await pool.query(query, values);
    } catch (err) {
        console.error("DB Insert Error:", err);
    }
}


export { saveToDB };