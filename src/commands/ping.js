const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const Town = require(`../models/town.model`);

module.exports = {
    name: `ping`,
    description: `Shows ping.`,
    usage: null,
    aliases: null
}

module.exports.run = async(client, message, args) => {
    const m = `${message.author} »`;

    let msg = await message.channel.send(`Ping?`);

    let sEmbed = new Discord.RichEmbed()
        .setColor(0xffa500)
        .setAuthor(`Client Latency`)
        .setDescription(`
        API: \`${Math.round(client.ping)}ms\`
        Gateway: \`${msg.createdTimestamp - message.createdTimestamp}ms\`
        `)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    msg.edit(sEmbed);

    
}