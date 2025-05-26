const NFC = require('../../database/models/nfc')

class NfcActions {

    // save NFC info POST
    async saveNFC(req, resp){
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const pesel = req.body.pesel;
        const birthDate = req.body.birthDate;
        const bloodType = req.body.bloodType;
        const allergies = req.body.allergies;
        const medications = req.body.medications;
        const assignedDoctorId = req.body.assignedDoctorId;
        const lastUpdate = req.body.lastUpdate;

        let nfc;

        try {
            nfc = new NFC({
                firstName: firstName,
                lastName: lastName,
                index: index,
                batchNumber: batchNumber,
                pesel: pesel,
                birthDate: birthDate,
                bloodType: bloodType,
                allergies: allergies,
                medications: medications,
                assignedDoctorId: assignedDoctorId,
                lastUpdate: lastUpdate
            });
            await nfc.save();
        } catch (error) {
            return resp.status(422).json({message: error.message})
        }

        resp.status(201).json(nfc);
        console.log(resp);
        console.log("NFC info saved successfully");
    }

    // read one NFC info GET
    async getNFC(req, resp){
        const id = req.params.id;

        let nfc;

        try{
            nfc = await NFC.findOne({ _id: id });
        } catch (error) {
            return resp.status(404).json({massage: error.message})
        }
        
        resp.status(200).json(nfc);
    }
   
}

module.exports = new NfcActions();