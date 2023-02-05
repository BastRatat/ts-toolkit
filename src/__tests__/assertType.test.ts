import { assertTypeT } from '../assertType'

describe('assertTypes', () => {
  type EmailAddress = string & { __type: 'EmailAddress' }

  function assertEmailAddress(emailAddress: string) {
    if (!emailAddress.includes('@')) {
      throw new Error(`${emailAddress} is invalid`)
    }
  }
  it('should not throw an error if a variable of type string is an email address using assertion', () => {
    const CORRECT_ADDRESS = 'bastien.ratat@gmail.com'
    expect(() =>
      assertTypeT<EmailAddress>(CORRECT_ADDRESS, () =>
        assertEmailAddress(CORRECT_ADDRESS),
      ),
    ).not.toThrowError()
  })
  it('should throw an error if a variable of type string is an email address using assertion', () => {
    const INCORRECT_ADDRESS = 'bastien.ratat.gmail.com'
    expect(() =>
      assertTypeT<EmailAddress>(INCORRECT_ADDRESS, () =>
        assertEmailAddress(INCORRECT_ADDRESS),
      ),
    ).toThrowError()
  })
})
