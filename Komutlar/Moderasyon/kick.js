module.exports = [{
          name: "kick",
          code: `
          <@$findMember[$message;false]> Kullanıcı Sunucudan Atıldı! ✅
          $kick[$guildID;$findMember[$message;false];Example reason!]
          $onlyPerms[administrator;Bunun İçin Yetkiniz Yetersiz! ✅]
          $onlyIf[$mentioned[1]!=;Lütfen Sunucudan Atılacak Kişiyi Ekle! ✅]`
}];