module.exports = ({
          name: "nuke",
          code: `
          $channelSendMessage[$newChannel[id];<@$authorID> Başarıyla Kanal **Nuke**'lendi! ✅]
          $deleteChannel[$channelID]
          $cloneChannel[$channelID;$channelName]
          $onlyPerms[administrator;Bunun İçin Yetkiniz Yetersiz! ✅]`
});