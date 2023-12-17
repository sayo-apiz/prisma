//The Simple Base Bot WhatsApp By sayoz//
/*
Very Thanks To:
• sayoz / MannOffc
• Adiwajshing
• And They Are
*/
//RENAME? KASI CR sayoz//
//BUY NO ENC? CHAT wa.me/62895329828237 klo ga diread kemungkinan kebanned lnjt chat aja ditiktok max chat 3x ditiktok tiktok gw @hyugimura//
require('./configs')
const { modul } = require('./module');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, yts } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const Mannverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}


module.exports = sayoz = async (sayoz, m, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "." : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //klo mawu no prefix ganti jadi gini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await sayoz.decodeJid(sayoz.user.id)
        const MannTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const MannTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await sayoz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    
    	const isUser = Mannverifieduser.includes(sender)
    	const banUser = await sayoz.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Wangsaf Made By sayoz`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;sayoz,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/d98139fff18ebed902a74.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>');
    
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

if(time2 < "23:59:00"){
var salam = 'vai durmi 😂'
}
if(time2 < "19:00:00"){
var salam = 'bora jogar 🤑'
}
if(time2 < "18:00:00"){
var salam = 'log on'
}
if(time2 < "15:00:00"){
var salam = 'log on'
}
if(time2 < "10:00:00"){
var salam = 'log on'
}
if(time2 < "05:00:00"){
var salam = 'log on'
}
if(time2 < "03:00:00"){
var salam = 'vai dormir kk'
} 

try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}
} catch (err) {
console.error(err)
}


if (!sayoz.public) {
if (!m.key.fromMe) return
}

/*const reply = (teks) => {
sayoz.sendMessage(m.chat, { text: teks/*, contextInfo:{"externalAdReply": {"title": "PRISMA 2K","body": `${pushname}`, "previewType": "VIDEO","thumbnail": logo,"sourceUrl": `https://instagram.com/breno.online`}}}, *///},{ quoted: m })}
const reply = (teks) => {
sayoz.sendMessage(m.chat, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./sayoz.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

if (m.message) {
sayoz.readMessages([m.key])
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

if (isCmd && !isUser) {
Mannverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(Mannverifieduser, null, 2))
}

sayoz.sendPresenceUpdate('available', from)
/*
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`❗ Jangan Tag Dia!!!
💤 Dia Sedang Afk ${reason ? 'Dengan Alasan '  + reason :  'Tanpa Alasan'}
⏰ Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
💥 Kamu Kembali Dari AFK${user.afkReason ? ' Setelah ' + user.afkReason : ''}
⏰ Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//auto block pakistan number
if (m.sender.startsWith('212')) return sayoz.updateBlockStatus(m.sender, 'block')

async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                global.db.data.users[m.sender].banned = true
                m.reply('*Jangan Spam Anj, Lu Gw Block Dahh, Ngerti Dikitlah Klo Lu Spam Gw Kena Banned Pihak WhatsApp*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}*/


async function loading () {
var Mann = [
"❮■■□□□□□□□□❯10%",
"❮■■■■□□□□□□❯30%",
"❮■■■■■■□□□□❯50%",
"❮■■■■■■■■□□❯80%",
"❮■■■■■■■■■■❯100%",
"✅"
]
let { key } = await sayoz.sendMessage(from, {text: 'carregando...'})

for (let i = 0; i < Mann.length; i++) {
/*await delay(10)*/
await sayoz.sendMessage(from, {text: Mann[i], edit: key });
}
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function sendsayozMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await sayoz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const voll = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "status@broadcast" }) 
},
"message": {
"pollCreationMessage": {
"name": `GawrGura`,
"options": [
	{
"optionName": "BOT WHATSAPP BY sayoz"
	}
],
"selectableOptionsCount": 1
}}}

const banRep = () => {
sayoz.sendMessage(m.chat, {
text:`Maaf Anda Sudah Di Banned Silahkan Chat @${creator.split("@")[0]} Untuk Membuka Nya`,
mentions: [creator],
},
{
quoted:m
})
}

try {
ppuser = await sayoz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await reSize(ppuser, 300, 300)
	   
if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
displayName: await sayoz.getName(i + '@s.whatsapp.net'),
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

function simpan(path, buff) {
fs.writeFileSync(path, buff)
return path
}
function getRandom(ext) {
ext = ext || ""
return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await sayoz.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await sayoz.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await sayoz.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await sayoz.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil)
})
})
}

async function sendPoll(jid, text, list) {
sayoz.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
url: "https://api.remove.bg/v1.0/removebg",
method: "POST",
data: form,
responseType: "arraybuffer",
headers: {
"X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
...form.getHeaders()
}
})
return res.data
}

async function getFile(media) {
let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
if (!data) return new Error("Result is not a buffer")
let type = await FileType.fromBuffer(data) || {
mime: "application/octet-stream",
ext: ".bin"
}
return {
data,
...type
}
}

async function sendFile(jid, media, options={}) {
let file = await getFile(media)
let mime = file.ext, type
if (mime == "mp3") {
type = "audio"
options.mimetype = "audio/mpeg"
options.ptt = options.ptt || false
}
else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
else if (mime == "webp") type = "sticker"
else if (mime == "mp4") type = "video"
else type = "document"
return sayoz.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `sayoz`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}



const nebal = (angka) => {
return Math.floor(angka)
}

/*if (!isCmd && isAlreadysayozList(chath, dblist)) {
var getraindata = getDatasayozList(chath, dblist)
if (getraindata.isImage === false) {
sayoz.sendMessage(m.chat, { text: sendsayozList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
sayoz.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}*/

const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"


switch (command) {
case 'public': {
if (!MannTheCreator) return m.reply(mess.owner)
sayoz.public = true
m.reply('*🌐ENTREI MODO PUBLICO COM SUCESSO*')
}
break


case 'self': {
if (!MannTheCreator) return m.reply(mess.owner)
sayoz.public = false
m.reply('*🌸ENTREI MODO AUTO COM SUCESSO*')
}
break
case 'menu':
loading()
sayoz.sendMessage(from, {image: { url: "https://telegra.ph/file/bf85ae21fa30c72eecba6.jpg" } , 
caption: 
`┌─❖
│  𓂀ℙℝ𝕀𝕊𝕄𝔸𓂀
└┬❖  ${pushname} 
┌┤✑  @${sender.split('@')[0]}
│└────────────┈ ⳹
│  𝖇𝖔𝖙 𝖊𝖒 𝖉𝖊𝖘𝖊𝖓𝖛𝖔𝖑𝖛𝖎𝖒𝖊𝖓𝖙𝖔
└┬────────────┈ ⳹
   │✑ 𝓟𝓪𝓲𝔃𝓪𝓸
   │✑ 𝓢𝓪𝔂𝓸𝔃
┌└──◇FIGURINHAS◇──┈ ⳹
│❏${prefix}s (foto/video)
│❏${prefix}goose 🅕
│❏${prefix}woof 🅕
│❏${prefix}8ball 🅕
│❏${prefix}lizard 🅕
│❏${prefix}meow 🅕
│❏${prefix}gura 🅕
│❏${prefix}doge 🅕
│❏${prefix}patrick 🅕
│❏${prefix}lovestick 🅕
◇───◇GRUPO◇──┈ ⳹
│❏${prefix}ping (mensagem)
◇───◇PESQUISA◇──┈ ⳹
│❏${prefix}yts (nome)
◇───◇BAIXAR◇──┈ ⳹
│❏${prefix}ytmp3 (link)
│❏${prefix}ytmp4 (link)
└─────────────────┈ ⳹
`}, { quoted : m })
break
case 'refil':
case 'ping':
if (!text) return reply(`precisa descrever o porque esta chamando a prisma, exemplo: ${prefix + command} entrem raid pz`)
if (!isAdmins) return reply(`este comando esta liberado apenas para os administradores da prisma!!`)
sayoz.sendMessage(m.chat, { text : `❗PRISMA IMPORTANTE ⚠️\n\n`+text, mentions: participants.map(a => a.id)}, { quoted: null })
break

//DOWNLOAD

case 'yts':{
if (!text) return reply(`exemplo : ${prefix+command} edit anime 30s`)
loading()
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
ngen = `
Titulo : ${anu.title}
ID : ${anu.videoId}
Visualizações: ${anu.views}
Dono : ${anu.author.name}
Canal : ${anu.author.url}
Link : ${anu.url}

Copie o link e use: ${prefix}ytmp3 para extrair o audio ou ${prefix}ytmp4 para video`
sayoz.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case "ytmp3": case "ytaudio": //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return reply(`isso e um link do YouTube?\nExemplo: ${prefix + command} https://youtube.com`)
loading()
const audio=await xeonaudp3.mp3(text)
console.log(audio)
await sayoz.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replygcxeon(`isso e um link do YouTube?\nExemplo: ${prefix + command} https://youtube.com`)
loading()
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Titulo:* ${vid.title}
*${themeemoji}Data:* ${vid.date}
*${themeemoji}Duração:* ${vid.duration}
*${themeemoji}Qualidade:* ${vid.quality}`
await sayoz.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break

//FIGURINHAS 

case 's': case 'sticker': case 'stiker': {
loading()
if (!quoted) return reply(`envie/marque Images/Videos/Gifs \nduração permitida para videos > 1-9`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sayoz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('envie/marque Images/Videos/Gifs \nduração permitida para videos > 1-9')
let media = await quoted.download()
let encmedia = await sayoz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
reply(`envie/marque Images/Videos/Gifs \nduração permitida para videos > 1-9`)
}
}
break

case 'patrick':
case 'patricksticker': {
loading()
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sayoz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
loading()	
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sayoz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
loading()
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sayoz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
loading()
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
sayoz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'gura':
case 'gurastick':{
loading()
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sayoz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break


default:
if (budy.startsWith('<')) {
if (!MannTheCreator) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!MannTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!MannTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
sayoz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
sayoz.sendMessage("5562936180708@s.whatsapp.net", { text: "conserte este erro seu fldp:" + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
}) 
