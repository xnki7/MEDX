const { ethers } = require("hardhat")
const hre = require("hardhat")

const tokens = (n) => {
    return ethers.utils.parseEther(n.toString(), "gwie")
}

async function main() {
    const [doc1, doc2, doc3, doc4, doc5, doc6, patient1, patient2] =
        await ethers.getSigners()

    //deploy appointments.sol
    const Appointments = await ethers.getContractFactory("Appointments")
    const appointments = await Appointments.deploy()
    await appointments.deployed()

    console.log(`\nAppointments contract is deloyed at: ${appointments.address}`)
    console.log(`Interacting with contract and adding doctors...\n`)

    let AddDoc = await appointments
        .connect(doc1)
        .addDoctors(
            doc1.address,
            "Tushar Sharma",
            tokens(1)
        )
    await AddDoc.wait()
    console.log(`Added doc 1${doc1.address}`);

    AddDoc = await appointments
        .connect(doc2)
        .addDoctors(
            doc2.address,
            "Kabir Singh",
            tokens(2)
        )
    await AddDoc.wait()
    console.log("Added doc 2")

    AddDoc = await appointments
        .connect(doc3)
        .addDoctors(
            doc3.address,
            "Tisha Shingh",
            tokens(2)
        )
    await AddDoc.wait()
    console.log("Added doc 3")

    AddDoc = await appointments
        .connect(doc4)
        .addDoctors(
            doc4.address,
            "Ravi Aghraval",
            tokens(1)
        )
    await AddDoc.wait()
    console.log("Added doc 4")

    AddDoc = await appointments
        .connect(doc5)
        .addDoctors(
            doc5.address,
            "Sneha N",
            tokens(3)
        )
    await AddDoc.wait()
    console.log("Added doc 5")

    AddDoc = await appointments
        .connect(doc6)
        .addDoctors(
            doc6.address,
            "Patric M",
            tokens(2)
        )
    await AddDoc.wait()
    console.log("Added doc 6")

    //Deploy Patient.sol
    const Patients = await ethers.getContractFactory("Patients")
    const patients = await Patients.deploy()
    await patients.deployed()

    console.log(`\nPatients contract is deloyed at: ${appointments.address}`);
    console.log(`Interacting with contract and adding Patients...\n`)

    //Add patients
    let AddPatients = await patients
        .connect(patient1)
        .addPatients(
            patient1.address,
            "Antonio Salieri",
            29,
            5,
            "+01 1122334455"
        )
        await AddPatients.wait()
        console.log("Added Patient 1")


    AddPatients = await patients
        .connect(patient2)
        .addPatients(
            patient2.address,
            "Amadeus Mozart",
            27,
            6,
            "+01 123456654321"
        )
        await AddPatients.wait()
        console.log("Added Patient 1")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
