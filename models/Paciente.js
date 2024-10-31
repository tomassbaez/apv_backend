import mongoose from 'mongoose';

const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    propietario: {
        type: String,
        requiered: true,
    },
    email: {
        type: String,
        requiered: true 
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    sintomas: {
        type: String,
        requiered: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario',
    },
    
}, 
{
    timestamps: true
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;