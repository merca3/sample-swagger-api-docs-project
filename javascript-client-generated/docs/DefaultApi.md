# PatientsApi.DefaultApi

All URIs are relative to *http://localhost:3000/api/v1/patients*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPatient**](DefaultApi.md#addPatient) | **POST** /patients | Add a patient
[**deletePatient**](DefaultApi.md#deletePatient) | **DELETE** /patients/{patient_id} | Delete specific patient data
[**getPatient**](DefaultApi.md#getPatient) | **GET** /patients/{patient_id} | Returns specific patient data
[**getPatients**](DefaultApi.md#getPatients) | **GET** /patients | Returns data about all patients
[**updatePatient**](DefaultApi.md#updatePatient) | **PUT** /patients/{patient_id} | Update specific patient data

<a name="addPatient"></a>
# **addPatient**
> addPatient(body)

Add a patient

Add a patient to the system

### Example
```javascript
import {PatientsApi} from 'patients_api';

let apiInstance = new PatientsApi.DefaultApi();
let body = new PatientsApi.Patient(); // Patient | Patient to add

apiInstance.addPatient(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Patient**](Patient.md)| Patient to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePatient"></a>
# **deletePatient**
> deletePatient(patientId)

Delete specific patient data

This operation deletes a patient data

### Example
```javascript
import {PatientsApi} from 'patients_api';

let apiInstance = new PatientsApi.DefaultApi();
let patientId = "patientId_example"; // String | ID of patient to delete

apiInstance.deletePatient(patientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientId** | **String**| ID of patient to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPatient"></a>
# **getPatient**
> Patient getPatient(patientId)

Returns specific patient data

This operation provides a patient data in JSON

### Example
```javascript
import {PatientsApi} from 'patients_api';

let apiInstance = new PatientsApi.DefaultApi();
let patientId = "patientId_example"; // String | ID of patient to return

apiInstance.getPatient(patientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientId** | **String**| ID of patient to return | 

### Return type

[**Patient**](Patient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getPatients"></a>
# **getPatients**
> [Patient] getPatients()

Returns data about all patients

This operation provides a view of the patients data in JSON

### Example
```javascript
import {PatientsApi} from 'patients_api';

let apiInstance = new PatientsApi.DefaultApi();
apiInstance.getPatients((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Patient]**](Patient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePatient"></a>
# **updatePatient**
> updatePatient(patientId)

Update specific patient data

This operation updates a patient data in JSON

### Example
```javascript
import {PatientsApi} from 'patients_api';

let apiInstance = new PatientsApi.DefaultApi();
let patientId = "patientId_example"; // String | ID of patient to update

apiInstance.updatePatient(patientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientId** | **String**| ID of patient to update | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

