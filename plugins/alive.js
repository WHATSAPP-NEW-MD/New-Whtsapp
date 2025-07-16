const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🙈",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
👋 Hi*: ${pushname}

⏳ Uptime*: ${runtime(process.uptime())}

📟 RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB

╭ＨＥＬＬＯＷ  ＩＭ  ＡＬＩＶＥ  ＮＯＷ ╮🙈💗

📍 ＤＥＰＬＯＹ ＢＹ ＳＡＮＮＵ⭕
        ╰─𝐁𝐎𝐓 𝐍𝐀𝐌𝐄❲➸ Qᴜᴇᴇɴ x ᴍᴅ ʙᴏᴛ ᴏғғɪᴄɪᴀʟ

🥀ᴘᴏᴡᴇʀᴅ ʙʏ ᴠᴏɪꜱ= 𝘕𝘰𝘵𝘪 𝘚𝘶𝘥𝘶❤️⃝➤⃟̱̱̱̱̄̄̄̄😢

📍 ＯＷＮＥＲ=https://wa.me/+94785893445?text=ꜱᴀɴɴᴜ


                     🧚ＰＯＷＥＲ  ＢＹ ＳＡＮＮＵ🧚‍
                     
ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴏꜰꜰɪᴄɪᴀʟ 𝐐𝐔𝐄𝐄𝐍 𝐗 𝐌𝐃 𝐁𝐎𝐓᭄
         
                ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻ ᭄ꦿQᥙᥱᥱn࿐x ᴍᴅ ʙᴏᴛ 

🚀ʜᴇʟʟᴏᴡ ᴀʟɪᴠᴇ ǫᴜᴇᴇɴ x ᴍᴅ ʙᴏᴛ ᴏғғɪᴄɪᴀʟ ɴᴏᴡ ᴜᴘᴅᴇᴀᴘ ᴏᴡɴᴇʀ sᴀɴɴᴜ ᴘᴏᴡᴇʀᴅ ʙʏ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴅᴇᴘʟᴏʏ⭕


                 ＥＮＪＯＹ  ＹＯＵＲ  ＢＯＴ  
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://cdn.vioo.my.id/v/fGXtKs.png` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363385281017920@newsletter',
                    newsletterName: '𝐐ᴜᴇᴇɴ 𝐗-𝙼𝙳',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
