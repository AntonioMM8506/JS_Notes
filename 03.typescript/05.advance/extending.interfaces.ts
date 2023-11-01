// Basic way to extend an interface
interface Mailable {
  send(email: string): boolean
  queue(email: string): boolean
}
interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean // 3
}
// Lets use FutureMailable
class FirstMail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} minutes.`)
    return true
  }

  send(email: string): boolean {
    console.log(`Send email to ${email} minutes.`)
    return true
  }

  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`)
    return true
  }
}
/*const myMailClass = new FirstMail()
myMailClass.later('test@example.com', 1000)
myMailClass.send('test@example.com')
myMailClass.queue('test@example.com')*/

// Lets create a other mailable interface
interface IncompleteMailable {
  sender(from: string, to: string): void
}

// Now lets create the complete mailable interface
interface CompleteMailable extends FutureMailable, IncompleteMailable {
  reciver(name: string): void
}

// Lets create a class with the complete mailable interface
class CompleteMail implements CompleteMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} minutes. - from Complete!`)
    return true
  }

  send(email: string): boolean {
    console.log(`Send email to ${email} minutes. - from Complete!`)
    return true
  }

  queue(email: string): boolean {
    console.log(`Queue an email to ${email}. - from Complete!`)
    return true
  }

  sender(from: string, to: string): void {
    console.log(`Send an email from ${from} to ${to}`)
  }

  reciver(name: string): void {
    console.log(`You recive an email from ${name}`)
  }
}
const myCompleteMailClass = new CompleteMail()
myCompleteMailClass.sender('from@example.com', 'to@example.com')