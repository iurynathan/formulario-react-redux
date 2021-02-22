import SUBMIT_FORMS from '../actions/index';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
}

export default function formsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FORMS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        cpf: action.payload.cpf,
        address: action.payload.address,
        city: action.payload.city,
        countryState: action.payload.countryState,
        addressType: action.payload.addressType,
        resume: action.payload.resume,
        role: action.payload.role,
        roleDescription: action.payload.roleDescription,
      }
    default:
      return state;
  }
}
