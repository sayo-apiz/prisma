require("http").createServer((_, res) => res.end("Uptime sayoZ!")).listen(8080)
require ('./configs')
const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber } = modul;
const { Boom } = boom;
const { default: sayozConnect, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, proto } = require("@adiwajshing/baileys")
const {
default: makeWASocket,
BufferJSON,
initInMemoryKeyStore,
DisconnectReason,
AnyMessageContent,
makeInMemoryStore,
useMultiFileAuthState,
delay
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const usePairingCode = true
const readline = require("readline")
const { uncache, nocache } = require('./lib/loader')
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const express = require('express');

const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const app = express();


//=================================================//

const mongoDB = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//

require('./sayoz.js')
nocache('../sayoz.js', module => console.log(color('[ CHANGE ]', 'aqua'), color(`'${module}'`, 'aqua'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'aqua'), color(`'${module}'`, 'aqua'), 'Updated'))

async function sayozBot() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const sayoz = sayozConnect({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
if(usePairingCode && !sayoz.authState.creds.registered) {
		const phoneNumber = await question('556293...:\n');
		const code = await sayoz.requestPairingCode(phoneNumber.trim())
		console.log(`Pairing code: ${code}`)

	}
//=================================================//

console.log(color(figlet.textSync(`Mann`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'aqua'))

console.log('The Simple Bot WhatsApp Made By sayoz')

sayoz.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

sayoz.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!sayoz.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(sayoz, kay, store)
require('./sayoz')(sayoz, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

sayoz.ev.on("groups.update", async (json) => {
try {
ppgroup = await sayoz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}

console.log(json)
const res = json[0];
if (res.announce == true) {
await sleep(2000)
sayoz.sendMessage(res.id, {
text: `「 GRUPO FECHADO 」\n\ngrupo foi fechado pelo administrador da prisma!`,
});
} else if (res.announce == false) {
await sleep(2000)
sayoz.sendMessage(res.id, {
text: `「 GRUPO ABERTO 」\n\ngrupo aberto para mensagens!`,
});
}
});

sayoz.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await sayoz.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await sayoz.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await sayoz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
if (anu.action == 'add') {
sayoz.sendMessage(anu.id, {
image: {url:ppuser}, caption : `✧━━━━[ *PRISMA* ]━━━━✧
_👋Olá @${num.split("@")[0]} Seja bem vindo a prisma, de uma olhadinha nas regras\n\n${metadata.subject}_

Seja ativo na gang!`},{ quoted : {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "status@broadcast" }) 
},
"message": {
"pollCreationMessage": {
"name": `2k`,
"options": [
	{
"optionName": "skin & hat"
	}
],
"selectableOptionsCount": 1
}}}})
} else if (anu.action == 'remove') {
sayoz.sendMessage(anu.id, {
image: {url:ppuser}, caption : `✧━━━━[ *PRISMA* ]━━━━✧
_@${num.split("@")[0]} acabou de sair do grupo`},{ quoted : {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "status@broadcast" }) 
},
"message": {
"pollCreationMessage": {
"name": `2k`,
"options": [
	{
"optionName": "skin & hat"
	}
],
"selectableOptionsCount": 1
}}}})
}
}
} catch (err) {
console.log(err)
}
})

sayoz.sendTextWithMentions = async (jid, text, quoted, options = {}) => sayoz.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

sayoz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

sayoz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = sayoz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

sayoz.getName = (jid, withoutContact  = false) => {
id = sayoz.decodeJid(jid)
withoutContact = sayoz.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = sayoz.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === sayoz.decodeJid(sayoz.user.id) ?
sayoz.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

sayoz.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

sayoz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await sayoz.getName(i),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await sayoz.getName(i + '@s.whatsapp.net')}\n
FN:${await sayoz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:salmanajja13@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/MannOffc\n
item3.X-ABLabel:GitHub\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
sayoz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}

sayoz.setStatus = (status) => {
sayoz.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

sayoz.public = true

sayoz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await sayoz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

sayoz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await sayoz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

sayoz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await sayoz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

sayoz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await sayoz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

sayoz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

sayoz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

sayoz.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

sayoz.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await sayoz.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await sayoz.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

sayoz.sendText = (jid, text, quoted = '', options) => sayoz.sendMessage(jid, { text: text, ...options }, { quoted })

sayoz.serializeM = (m) => smsg(sayoz, m, store)

sayoz.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); sayoz.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); sayozBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); sayozBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); sayoz.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); sayoz.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); sayozBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); sayozBot(); }
else sayoz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (connection === "open") { sayoz.sendMessage(owner + "@s.whatsapp.net", { text: `sayoz on` }); }
console.log('Connected...', update)
})

sayoz.ev.on('creds.update', await saveCreds)

start('2',colors.bold.white('\nAguardando nova mensagem..'))

sayoz.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
sayoz.sendMessage(jid, buttonMessage, { quoted, ...options })
}

sayoz.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: sayoz.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `https://youtube.com/@hyugimura}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `5562936180708@s.whatsapp.net`
}
}, options)
return sayoz.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

sayoz.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
sayoz.relayMessage(jid, template.message, { messageId: template.key.id })
}

sayoz.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
sayoz.sendMessage(jid, fjejfjjjer, { quoted: m })
}

return sayoz

}

sayozBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
}) 

const porta = process.env.PORT || 5000;
//iniciando...
app.listen(porta, () => console.log("site Online na porta:", porta));

