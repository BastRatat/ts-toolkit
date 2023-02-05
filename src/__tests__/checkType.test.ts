import { checkTypeT } from '../checkType'

describe('checkType', () => {
  type EmailAddress = string & { __type: 'EmailAddress' }
  it('should return true if the checker validates', () => {
    const CORRECT_ADDRESS = 'bastien.ratat@gmail.com'
    const checker = checkTypeT<EmailAddress>(CORRECT_ADDRESS, () =>
      CORRECT_ADDRESS.includes('@'),
    )
    expect(checker).toBeTruthy()
  })
  it('should return false if the checker invalidates', () => {
    const INCORRECT_ADDRESS = 'bastien.ratat.gmail.com'
    const checker = checkTypeT<EmailAddress>(INCORRECT_ADDRESS, () =>
      INCORRECT_ADDRESS.includes('@'),
    )
    expect(checker).toBeFalsy()
  })
})
