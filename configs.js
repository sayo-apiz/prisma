const chalk = require("chalk")
const fs = require("fs")


//—————「 Set Nama Bot & Own 」—————//
global.sessionName = "conexao"
global.botname = "prisma"
global.ownername = 'sayoz'
global.creator = "5562936180708@s.whatsapp.net"
global.prefa = ['#', '.']
global.hituet = 0
global.linkgc = "link"
global.owner = ['5562936180708']
global.dana = '089509419214'
global.gopay = '62 936180708'
global.allpay = 'sla'
global.ovo = 'kaka'

//—————「 Set Wm 」—————————//
global.themeemoji = '🐬'
global.wm = "prisma"
global.packname = "PRISMA"
global.author = "2K"

//—————「 Set Image 」————————//
global.thumb = fs.readFileSync("./image/gura.jpg")
global.logo = fs.readFileSync("./image/logo.jpg")

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Message 」——————//
global.mess = {
done: 'Feito ✅',
success: 'Pronto ✅',
admin: 'Fitur Ini Khusus Admin Grup Kak :P',
botAdmin: 'Jadikan Bot Admin Terlebih Dahulu Kak :D',
owner: 'Fitur Ini Khusus Owner Bot Kak :P',
group: 'Cuma Bisa Di Gunakan, Di Dalam Grup Kak :P',
endLimit: 'Limit Kamu Habis Kak :P',
prem: 'Fitur Ini Khusus User Prem Kak :P',
spesial: 'Fitur  Ini Khusus User Special Kak :D',
wait: 'Lagi Diproses Ya Kak :P',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
