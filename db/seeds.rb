
User.create!(username: "skroob", password: "12345", password_confirmation: "12345", img_url: "https://static.wikia.nocookie.net/spaceballs/images/3/30/Skroob.jpg" )
User.create!(username: "mulder", password: "Tru$tN01", password_confirmation: "Tru$tN01", img_url: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/08/x-files-fox-mulder.jpg")


Item.create!(product: "Accessory", name:"Pruning Scissors", price: "9.99", age:"nil", img_url: "https://image.shutterstock.com/image-photo/old-rusted-scissors-on-white-600w-1062555587.jpg")
Item.create!(product:"Accessory", name:"Grafting Wir",price:"14.99", age:"nil", img_url:"https://m.media-amazon.com/images/I/81wiWcvOskL._AC_SL1500_.jpg")


Item.create!(product:"Plant", name:"Juniper 0001", price:"129.95", age:"2006-01-02 00:00:00.000000000 +0000", img_url:"https://cdn.pixabay.com/photo/2021/03/22/11/40/bonsai-6114252__340.jpg")
Item.create!(product:"Plant", name:"Pine 0001", price:"799.95", age:"1992-03-12 00:00:00.000000000 +0000", img_url:"https://cdn.pixabay.com/photo/2018/05/30/10/18/wood-3441147__340.jpg")
Item.create!(product:"Plant", name:"Maple 0001", price:"79.95", age:"2015-05-14 00:00:00.000000000 +0000", img_url:"https://cdn.pixabay.com/photo/2017/04/07/14/46/bonsai-2211102__340.jpg")
Item.create!(product:"Plant", name:"Pine 0002", price:"149.95", age:"2005-02-20 00:00:00.000000000 +0000", img_url:"https://cdn.pixabay.com/photo/2016/11/07/11/07/bonsai-1805501__340.jpg")
Item.create!(product:"Plant", name:"Juniper 0002", price:"229.95", age:"2002-01-28 00:00:00.000000000 +0000", img_url:"https://cdn.pixabay.com/photo/2014/04/05/11/39/bonsai-316573__340.jpg")
Item.create!(product:"Plant", name:"Azalea 0001", price:"439.95", age:"1998-04-12 00:00:00.000000000 +0000", img_url:"https://cdn.pixabay.com/photo/2018/02/02/15/52/bonsai-3125722__340.jpg")
Item.create!(product:"Plant", name:"Other 0001", price:"89.95", age:"2002-06-05 00:00:00.000000000 +0000", img_url:"https://cdn.pixabay.com/photo/2020/05/17/13/06/bonsai-5181550__340.jpg")


UsersItem.create!(user_id:1, item_id:1)
UsersItem.create!(user_id:1, item_id:2)
UsersItem.create!(user_id:1, item_id:4)
UsersItem.create!(user_id:1, item_id:5)

UsersItem.create!(user_id:2, item_id:2)
UsersItem.create!(user_id:2, item_id:4)
UsersItem.create!(user_id:2, item_id:6)
UsersItem.create!(user_id:2, item_id:9)