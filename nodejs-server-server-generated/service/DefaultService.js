'use strict';


/**
 * Add a patient
 * Add a patient to the system
 *
 * body Patient Patient to add
 * no response value expected for this operation
 **/
exports.addPatient = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete specific patient data
 * This operation deletes a patient data
 *
 * patient_id String ID of patient to delete
 * no response value expected for this operation
 **/
exports.deletePatient = function(patient_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns specific patient data
 * This operation provides a patient data in JSON
 *
 * patient_id String ID of patient to return
 * returns Patient
 **/
exports.getPatient = function(patient_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "symptoms" : "Cough and Sore Throat",
  "dosage" : "500mg",
  "gender" : "Female",
  "patient_id" : "P1002",
  "date_of_birth" : "1990-09-28T00:00:00.000+00:00",
  "patient_name" : "Jane Smith",
  "diagnosis" : "Bronchitis",
  "medication" : "Amoxicillin",
  "id" : "621c7f80-cefb-47d5-b2b4-01f7c3f25b99",
  "visit_date" : "2023-01-05T00:00:00.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns data about all patients
 * This operation provides a view of the patients data in JSON
 *
 * returns List
 **/
exports.getPatients = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "symptoms" : "Cough and Sore Throat",
  "dosage" : "500mg",
  "gender" : "Female",
  "patient_id" : "P1002",
  "date_of_birth" : "1990-09-28T00:00:00.000+00:00",
  "patient_name" : "Jane Smith",
  "diagnosis" : "Bronchitis",
  "medication" : "Amoxicillin",
  "id" : "621c7f80-cefb-47d5-b2b4-01f7c3f25b99",
  "visit_date" : "2023-01-05T00:00:00.000+00:00"
}, {
  "symptoms" : "Cough and Sore Throat",
  "dosage" : "500mg",
  "gender" : "Female",
  "patient_id" : "P1002",
  "date_of_birth" : "1990-09-28T00:00:00.000+00:00",
  "patient_name" : "Jane Smith",
  "diagnosis" : "Bronchitis",
  "medication" : "Amoxicillin",
  "id" : "621c7f80-cefb-47d5-b2b4-01f7c3f25b99",
  "visit_date" : "2023-01-05T00:00:00.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update specific patient data
 * This operation updates a patient data in JSON
 *
 * patient_id String ID of patient to update
 * no response value expected for this operation
 **/
exports.updatePatient = function(patient_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

