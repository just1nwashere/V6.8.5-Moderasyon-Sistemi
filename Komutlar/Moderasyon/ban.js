module.exports = [{
          name: "ban",
          code: `
          <@$mentioned[1]> Adlı Kullanıcı **$noMentionMessage[1]** Sebebiyle Banlandı!
          $ban[$guildID;$mentioned[1];7;$noMentionMessage[1]]
          $onlyIf[$mentioned[1]!=;.ban @etiket]
          $onlyIf[$noMentionMessage[1]!=;Ban Sebebiyeti Giriniz!]
          $onlyPerms[administrator;Bunun İçin Yetkiniz Yetersiz! ✅]`
}];