const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

bot.onJoin()
bot.onLeave()
bot.onMessage()

bot.status({
text:"Durum yazısı.",
type:"PLAYING",
status:"dnd",
time: 12
})

bot.variables({
prefix:"prefixi yaz.",
})

bot.command({
name:"ping",
aliases:"gecikme",
description:"Botun pingini gösterir.",
code:`
Pong! \`$botPingms\`
`
})
