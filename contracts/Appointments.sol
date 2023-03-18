//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

//contract...
contract Appointments {

    //Type Decleration...
    // structs
    struct Doctor {
        address payable addr;
        string name;
        bool availablity;
        uint256 fee;
    }
    struct Appointment {
        uint256 ID;
        address patientAddr;
        string patientName;
        uint256 date;
        uint256 time;
        address doctorAddr;
        string doctorName;
        bool payment;
    }

    //Variables...
    mapping(address => Doctor) public doctors;
    Appointment[] public appointments;
    uint256[] public appointmentId;

    //Errors...
    error Appointment__TransferFailed();

    //Functions...
    function addDoctors(/* Fuction to add doctors */
        address payable _docAddr,
        string memory _docName,
        uint256 _fee
    ) public {
        doctors[_docAddr] = Doctor(_docAddr, _docName, true, _fee);
    }

    function bookAppointment(/* Function to book appointment */
        address _patientAddr,
        string memory _patientName,
        uint256 _date,
        uint256 _time,
        address _docAddr
    ) public payable {

        require(
            doctors[_docAddr].availablity,
            "Doctor is not available at the time..."
        );
        require(_date >= block.timestamp, "invalid time...");
        require(
            msg.value >= doctors[_docAddr].fee,
            "Not enough ether sent to cover the appointment fee"
        );

        address payable DocAddr = doctors[_docAddr].addr;
        uint256 Fee=doctors[_docAddr].fee;
        bool status;

        //payment
        (bool success, ) = DocAddr.call{
            value: Fee
        }("");
        if (!success) {
            revert Appointment__TransferFailed();
        }
        else{
            status=true;
        }

        //Booking Appointment
        uint256 _ID = appointments.length;
        Appointment memory appointment = Appointment(
            _ID,
            _patientAddr,
            _patientName,
            _date,
            _time,
            _docAddr,
            doctors[_docAddr].name,
            status
        );
        appointments.push(appointment);
        appointmentId.push(_ID);
        doctors[_docAddr].availablity = false;
    }

    /*
    function getAppointmentDetails(uint256 _ID) public view returns(Appointment memory){
        return appointments[_ID];
    }
    */

    //Get Functions...
    function getPatientName(uint256 _ID) public view returns(string memory){
        return appointments[_ID].patientName;
    }

    function getPatientAddress(uint256 _ID) public view returns(address){
        return appointments[_ID].patientAddr;
    }

    function getDoctorName(uint256 _ID) public view returns(string memory){
        return appointments[_ID].doctorName;
    }

    function getDoctorAddress(uint256 _ID) public view returns(address){
        return appointments[_ID].doctorAddr;
    }

    function getAppointmentDate(uint256 _ID) public view returns(uint256){
        return appointments[_ID].date;
    }

    function getAppointmentTime(uint256 _ID) public view returns(uint256){
        return appointments[_ID].time;
    }

}