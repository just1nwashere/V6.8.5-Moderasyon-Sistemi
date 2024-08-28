module.exports = ({
          name: "sil",
          code: `
          $message[1] Kadar Mesaj Uzaya Yollandı! ✅
          $clear[$message[1]]
          $onlyPerms[administrator;Bunun İçin Yetkiniz Yetersiz! ✅]
          $onlyIf[$message[1]!=;Lütfen Silinecek Mesaj Sayısını Girin! ❎]
          $deleteIn[1s]`
});