module.exports = ({
          name: "unban",
          code: `
          <@$mentioned[1]> Adlı Kişinin Sunucu İçi Banı Kaldırıldı! ✅
          $unban[$guildID;$mentioned[1];.?.]
          $onlyPerms[administrator;Bunun İçin Yetkiniz Yetersiz! ✅]
          $onlyIf[$mentioned[1]!=;Lütfen Banı Açılacak Kişinin ID'sini Girin! ❎]`
});