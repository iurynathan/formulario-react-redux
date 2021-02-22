import SUBMIT_FORMS from './index';

export default function formsSubmit(
  name,
  email,
  cpf,
  address,
  city,
  countryState,
  addressType,
  resume,
  role,
  roleDescription,
) {
  return {
    type: SUBMIT_FORMS,
    payload: {
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      addressType,
      resume,
      role,
      roleDescription,
    }
  }
}
