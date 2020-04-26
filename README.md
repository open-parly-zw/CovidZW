
# CovidZW

## CovidZw Hackathon Home page Files

## CovidZw  API Files
 
### **Base Url : https://crnzwhack.herokuapp.com**


### Covid  Last Update Date

**Url : '/dateUpdate'**
|Name  |Description  |Type  |
|---------|---------|---------| 
|date   | Last date of update on site  | String|
|today  |   check if update is latest | String|
    
#### Example Object
    {
        "_id": "5e9756be2247110017f3a8b1",
        "date": "21/04/2020",
        "today": "yes",
        "__v": 0
    }

### Covid  Cases : Gender Breakdown

**Url : '/sexUpdate'**
|Name  |Description  |Type  |
|---------|---------|---------|    
|male            |male            | String|
|female          |female          | String|
|today          |today          | String|
#### Example Object
    
    {
        "_id": "5e88b847a10a7d00175cd8bd",
        "male": "13",
        "female": "12",
        "today": "yes",
        "__v": 0
    }


### Covid  Cases : Mode Of Transmission

**Url : '/transmissionUpdate'**

|Name  |Description  |Type  |
|---------|---------|---------|
|travel  |Transmision via travel  | String|
|local   |Transmision via local contact  | String|
|pending |pending cases   | String  |
|today   |today           | String|

#### Example Object
     
    {
        "_id": "5e8e4999d719bb0017a44244",
        "travel": "13",
        "local": "12",
        "pending": "",
        "today": "yes",
        "__v": 0
    }



### Covid Positive Cases Per Province
**Url : '/CasesProvince'**

|Name  |Description  |Type  |
|---------|---------|---------|
Bulawayo   |Positive Cases in Bulawayo  Province | String|
Harare     |Positive Cases in Harare  Province | String|
Manicaland |Positive Cases in Manicaland  Province | String|
Mashonaland_Central |Positive Cases in Mashonaland Central  Province | String|
Mashonaland_East |Positive Cases in Mashonaland East  Province | String|
Mashonaland_West |Positive Cases in Mashonaland West  Province | String|
Masvingo | Positive Cases in Masvingo  Province | String|
Matabeleland_North | Positive Cases in Matabeleland North  Province | String|
Matabeleland_South | Positive Cases in Matabeleland South  Province | String|
Midlands | Positive Cases in Midlands  Province | String|
today           |check if update is latest| String|

#### Example Object

    {
        "_id": "5e8e495bd719bb0017a44243",
        "Bulawayo": "10",
        "Harare": "9",
        "Manicaland": "1",
        "Mashonaland_Central": "0",
        "Mashonaland_East": "4",
        "Mashonaland_West": "0",
        "Masvingo": "0",
        "Matabeleland_North": "1",
        "Matabeleland_South": "0",
        "Midlands": "0",
        "today": "yes",
        "__v": 0
    }



### Covid Stats Summary

**Url : '/UpdateSummary'**

|Name  |Description  |Type  |
|---------|---------|---------|
|TotalTests      |Country Total tests Conducted|  String|
|PositiveCases   |Country Total Postive Cases |  String|
|NegativeTests   |Country Total Postive Cases|  String|
|Deaths          |Country Total Postive Deaths|  String|
|ICU             |Country Total ICU Cases|  String|
|AverageAge      |Average Age of Country Cases|  String|
|MedianAge       |Median Age of Country Cases|  String|
|MinimumAge      |Minimum Age of Country Cases|  String|
|MaximumAge      |Maximum Age of Country Cases|  String|
|today           |check if update is latest|  String  |


#### Example Object


    {
        "_id": "5e8f9ba8dec8770017cfc833",
        "TotalTests": "4159",
        "PositiveCases": "28",
        "NegativeTests": "4066",
        "Deaths": "3",
        "ICU": "2",
        "AverageAge": "35.80",
        "MedianAge": "32",
        "MinimumAge": "4",
        "MaximumAge": "79",
        "today": "yes",
        "__v": 0
    }


### Covid Positive Cases 
**Url : '/apicase'**


|Name  |Description  |Type  |
|---------|---------|---------|
|case_id                 |Case Number| String|
|origin_case_id          |Case Number in Contracted from| String|
|date                    |Date of Test| Date|
|age                     |Age of Case| String|
|gender                  |Gender of Case| String|
|city                    |City of Case| String|
|province                |Province of Case| String|
|country                 | Country of Case| String|
|current_status          |Current Status | String|
|source                  |Local or Travel| String|
|symptoms                |Sypmtoms| String|
|date_onset_symptoms     |Date of symptoms onset | Date|
|date_admission_hospital |Date of Hospital admissions| Date|
|date_confirmation       |Date of Confirmation| Date|
|underlying_conditions   |Underlying conditions| String|
|travel_history_dates    |Travel Dates| Date|
|travel_history_location |Travel Locations| String|
|death_date              |Date of Death| Date|
|notes_for_discussion    |Notes| String   

#### Example Object
    {
        "_id": "5e9c2b1777a3850f8234079f",
        "caseId": 11,
        "originCaseId": null,
        "date": null,
        "age": "79",
        "gender": "M",
        "city": "Bulawayo",
        "province": "BUL",
        "country": "Zimbabwe",
        "currentStatus": "Died",
        "source": "MoHCC",
        "symptoms": null,
        "dateOnsetSymptoms": null,
        "dateAdmission_hospital": null,
        "dateConfirmation": "7/4/2020",
        "underlyingConditions": null,
        "travelHistoryDates": null,
        "travelHistoryLocation": "Local",
        "deathOfDate": "4/4/2020",
        "notes": "First known instance of community infection"
    }



### Covid Daily Stats

**Url : '/apiday'**


|Name  |Description  |Type  |  
|---------|---------|---------|    
|Date           |    Date |Date|
|CMTTOTAL       | Cummilative Country Total Cases  |  String |
|TOTALTST       |Country Total Tested |  String |
|TOTALPSTV      |Country Total Positive Test |  String |
|TOTALPSTVRETEST|Country Total Positive ReTest |  String |
|TOTALNGTV      |Country Total Negative Test |  String |
|TOTALINC       |Country Total inconclusive Test |  String |
|TOTALDEAD      |Country Total dead |  String |
|TOTALICU       |Country Total in ICU  |  String |
|TOTALRCVD      |Country Total recoverd|  String |
|......||   |

##### Suffix

|Suffix  |Description  |Type  |  
|---------|---------|---------|   
|-TST  |Total Tested           | String |
|-PSTV |Total Positive Test    | String |
|-NGTV |Total Negative Test    | String |
|-INC  |Total inconclusive Test| String |
|-DEAD |Total dead             | String |
|-ICU  |Total in ICU           | String |
|-RCVD |Total recoverd         | String |



##### Province Abbreviation

|Suffix  |Description  |Type  |  
|---------|---------|---------|
|BUL|Bulawayo|
|HRE|Harare|
|MNL|Manicaland|
|MSC|Mashonaland Central|
|MSE|Mashonaland East|
|MSW|Mashonaland West|
|MVG|Masvingo|
|MBN|Matabeleland North|
|MBS|Matabeleland South|
|MID|Midlands|

   
**Eg BULTST -Bulawayo Total Tested**


#### Example Object
   
    {
        "_id": "5e9b6fba77a3850f823406bc",
        "Date": "2020-03-14T00:00:00.000Z",
        "TOTALTST ": "0",
        " TOTALPSTV ": "0",
        " TOTALPSTVRETEST ": "0",
        " TOTALNGTV ": "0",
        " TOTALINC ": "0",
        " TOTALDEAD ": "0",
        " TOTALICU ": "0",
        " TOTALRCVD": "0",
        "HRETST": "0",
        " HREPSTV": "0",
        " HRENGTV": "0",
        " HREINC": "0",
        " HREDEAD": "0",
        " HREICU": "0",
        " HRERCVD": "0",
        " BULTST": "0",
        " BULPSTV": "0",
        " BULNGTV": "0",
        " BULINC": "0",
        " BULDEAD": "0",
        " BULICU": "0",
        " BULRCVD": "0",
        " MNLTST": "0",
        " MNLPSTV": "0",
        " MNLNGTV": "0",
        " MNLINC": "0",
        " MNLDEAD": "0",
        " MNLICU": "0",
        " MNLRCVD": "0",
        " MSCTST": "0",
        " MSCPSTV": "0",
        " MSCNGTV": "0",
        " MSCINC": "0",
        " MSCDEAD": "0",
        " MSCICU": "0",
        " MSCRCVD": "0",
        " MSETST": "0",
        " MSEPSTV": "0",
        " MSENGTV": "0",
        " MSEINC": "0",
        " MSEDEAD": "0",
        " MSEICU": "0",
        " MSERCVD": "0",
        " MSWTST": "0",
        " MSWPSTV": "0",
        " MSWNGTV": "0",
        " MSWINC": "0",
        " MSWDEAD": "0",
        " MSWICU": "0",
        " MSWRCVD": "0",
        " MVGTST": "0",
        " MVGPSTV": "0",
        " MVGNGTV": "0",
        " MVGINC": "0",
        " MVGDEAD": "0",
        " MVGICU": "0",
        " MVGRCVD": "0",
        " MBNTST": "0",
        " MBNPSTV": "0",
        " MBNNGTV": "0",
        " MBNINC": "0",
        " MBNDEAD": "0",
        " MBNICU": "0",
        " MBNRCVD": "0",
        " MBSTST": "0",
        " MBSPSTV": "0",
        " MBSNGTV": "0",
        " MBSINC": "0",
        " MBSDEAD": "0",
        " MBSICU": "0",
        " MBSRCVD": "0",
        " MIDTST": "0",
        " MIDPSTV": "0",
        " MIDNGTV": "0",
        " MIDINC": "0",
        " MIDDEAD": "0",
        " MIDICU": "0",
        " MIDRCVD": "0"
    }