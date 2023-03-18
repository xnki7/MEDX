//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

//contract...
contract Patients {
    //Type Declaration
    //struct
    struct Patient {
        address patientAddr;
        string patientName;
        uint256 age;
        uint256 height;
        string mobNo;
    }

    // Variables
    mapping(address => Patient) public patients;

    //functions
    function addPatients(
        /* function to add patients */
        address _patientAddr,
        string memory _patientName,
        uint256 _age,
        uint256 _height,
        string memory _mobNo
    ) public {
        patients[_patientAddr] = Patient(
            _patientAddr,
            _patientName,
            _age,
            _height,
            _mobNo
        );
    }

    //Get Functions
    function getPatientName(address _patientAddr)
        public
        view
        returns (string memory)
    {
        return patients[_patientAddr].patientName;
    }

    function getAge(address _patientAddr) public view returns (uint256) {
        return patients[_patientAddr].age;
    }

    function getHeight(address _patientAddr) public view returns (uint256) {
        return patients[_patientAddr].height;
    }

    function getMobNo(address _patientAddr)
        public
        view
        returns (string memory)
    {
        return patients[_patientAddr].mobNo;
    }

    function delUser(address _patientAddr) public {
        /* function to delete profile */
        delete patients[_patientAddr];
    }

    function updateUser(
        /* function to update the profile */
        address _patientAddr,
        string memory _patientName,
        uint256 _age,
        uint256 _height,
        string memory _mobNo
    ) public {
        patients[_patientAddr].patientName = _patientName;
        patients[_patientAddr].age = _age;
        patients[_patientAddr].height = _height;
        patients[_patientAddr].mobNo = _mobNo;
    }
}
