module.exports = ({
            name: "isim-değiştir",
            code: `
            @$mentioned[1] Adlı Kişinin İsmi Değiştirildi! ✅
            $setUserNickname[$mentioned[1];$noMentionMessage[1];.?.]
            $onlyPerms[administrator;Bunun İçin Yetkiniz Yetersiz! ✅]
            $onlyIf[$message[1]!=;Lütfen Üyenin Yeni İsmini Girin! ❎]`
});