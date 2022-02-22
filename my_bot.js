const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

bot_secret_token= "censored_for_github"

client.login(bot_secret_token)

// v sending messages to a channel
client.on('ready', () => {
    var generalChannel = client.channels.get(461696953017958401)
    generalChannel.send("there's 36 letters in the alphabet, mick murray")
})

client.login("censored_for_github")

//make reply to a messsage
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    receivedMessage.channel.send("Message received: " + receivedMessage.content)
})

//"kill switch" for the bot
client.on('message', (receivedMessage) => {
    if (receivedMessage.content == ("!stop") )
        return client.logout()
        
client.login("censored_for_github")
})

//checking if the bot was tagged (might not be useful)
client.on('message'), (receivedMessage) => {
    // Prevent bot from responding to own messages
    if (receivedMessage.author == client.user) {
        return
    }

    // Check if bot was tagged
    if (receivedMessage.content.includes(client.user.toString())) {
        //send "received" message
        receivedMessage.channel.send("Message received from " + 
            receivedMessage.author.toString() + ": " + receivedMessage.content)
    }
};

client.login("censored_for_github")

//commands for the bot
client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // <- stops bot from responding to own messages
        return
    }

    if (receivedMessage.content.startsWith(".")) {
        processCommand(receiveMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // removes the "." from the start
    let splitCommand = fullCommand.split (" ") // Splits the message into each letter/piece
    let primaryCommand = splitCommand[0] // signifies that the first word after the "." is a command
    let arguments = splitCommand.slice(1) // All other words in the sentence are arguments/options for the command

    console.log ("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // may not be arguments
    
    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("bro what are you talking about. try '.help' or '.multiply'")
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("bro you want " + arguments)
    } else { 
        receivedMessage.channel.send("idk what u want. try '.help [topic]'")
    }
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `.multiply 2 4 10` or `.multiply 5.2 7`")
        return
    }
    let product = 1 
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

client.login("censored_for_github") 
