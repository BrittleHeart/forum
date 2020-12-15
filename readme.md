# Introduction
Well, good morning everyone. I am so excited about possibility to tell you about this project.
So - this project has been written with [Nestjs](https://nestjs.org) and [Angular-cli](https://angular.io)
**Bartosz Pazdur Forum** is some sort of complement of my first project called **Bartosz Pazdur Blog**, which you can
also find [here](https://gitlab.com/BrittleHeart/bartosz-pazdur-blog)

# Project ideas

# Whole project structure
Project is going to be separated with
- Backend
- Frontend

This will allow me to create simple connection that I can potentially use, to make server -> client communication faster.

## How to create servers structure?
Well .. I am going to create
- Main server -> Used for creating
    - Topics
    - Users
    - Inviting friends
    - etc ..
- Mailing server -> Used for only mailing users if someone texted to them.
> STILL I DON”T KNOW HOW TO IMPLEMENT THAT. I HAVE TO THINK ABOUT IT

In pseudo code, it could look something like this

```typescript
export class Mail extends MailService {
	private readonly host: string;
	private readonly port: number;
    private readonly email: string;
	private readonly password: string;
	private readonly autograph: string;

	constructor(private readonly mailService: MailService) {
	    super();
		mailService.config({host, port, email, password,autograph});
	}

	async sendMail(content: string) {
		await this.mailService.send(content)
	}
}
```

But to be honest, Im not pretty sure about it.

## Important middlewares and Guards
I need to implement Guards and middlewares to protect my API before unwanted users.

So I will need to create
- JWT Guard
- Local Guard
- Logging middleware
- Cors middleware -> Nestjs have one

## Password hashing
Password having is going to handled via **Bcrypt**.

# How can I create frontend side?
I am going to use [Angular](https://angular.io). For styling sass is going to be a perfect choice.  For such a big project sass will allow me to create mixins and function that on the other hand will be helpful to avoid repeatability.