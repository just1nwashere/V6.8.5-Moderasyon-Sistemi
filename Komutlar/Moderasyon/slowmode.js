module.exports = ({
          name: "slowmode",
          code: `
          <#$channelID> $message[1] Saniyelik Yapıldı!
          $slowmode[$message[1];$channelID]
          $onlyPerms[administrator;Bunun İçin Yetkiniz Yetersiz! ✅]
          $onlyIf[$message[1]!=;Lütfen Bir Sayı Gir ❎]`
});