let media = './galerΓ­a/grupos-oficiales.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*π·πΎπ»π° ππππ°ππΈπΎ ππ», ππ΄ πΈπ½ππΈππΎ π° ππ½πΈπππ΄ π° π»πΎπ πΆπππΏπΎπ πΎπ΅πΈπ²πΈπ°π»π΄π π³π΄ πππππ-πππ πΏπ°ππ° π²πΎπ½ππΈππΈπ π²πΎπ½ π»π° π²πΎπΌππ½πΈπ³π°π³ :D*

*β€ πΆπππππ πππππππππ πππ π±ππ:*
*1.-* https://chat.whatsapp.com/Ez9Lz8Q4WCpKg3BBcrnUMP

*2._* https://chat.whatsapp.com/FpnkkfyOEwKFLrVRkekCU4

*3._* https://chat.whatsapp.com/D9ztlal0GOG4LbcpS00ehJ

*4._* https://chat.whatsapp.com/KW8t7A6LQfw2K5BFh0ZFid

*5._* https://chat.whatsapp.com/Bs5fNTJTS0X7lF6mpvlqxZ 

*6._* https://chat.whatsapp.com/K0gwYuoWd0A6jwM9CiK9YN

*7._* https://chat.whatsapp.com/IOB712Mxd8YL5j1ROQsnmI
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
