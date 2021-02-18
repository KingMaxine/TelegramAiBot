const Telegraf = require('telegraf');
const express = require('express')

const app = express()

const PORT = process.env.PORT || '8080'
const RiveScript = require('rivescript')
var ai = new RiveScript();

const bot = new Telegraf("1685442683:AAF_xp1B4OECjC4Wp_VgrJwNr62Z8gha0jc")
// Set the bot response

ai.loadDirectory("brain").then(function() {
ai.sortReplies();

bot.start(ctx=>{
ctx.reply('Hello '+ctx.from.first_name+' i am an Ai that uses rivescript for logic')
})

bot.on('text', (ctx)=>{
var user = ctx.from.id+'user';
var message = ctx.message.text;
ai.reply(user, message).then(function(reply) {
if (reply.length > 0) {
					ctx.reply(reply);
				}
})

})
}).catch(function(err) {
	console.error(err);
})

bot.startPolling() 
