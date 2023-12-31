# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

members = [{
  name: "スイカ",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/29120/mini_magick20210827-21429-esrgvk.jpg",
  goal: "",
  reflection: ""
}, {
  name: "コトハ",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/29954/mini_magick20221019-5188-181syj.jpg",
  goal: "",
  reflection: ""
  }, {
  name: "あっくん",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/30677/mini_magick20230329-20510-38m2iq.jpg",
  goal: "",
  reflection: ""
}, {
  name: "なつき",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/31130/mini_magick20230315-15713-c5p1ch.png",
  goal: "",
  reflection: ""
}, {
  name: "キシモト",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/31219/mini_magick20230328-20510-flx9r6.jpg",
  goal: "",
  reflection: ""
}]

members.each do |member|
  Member.create!(name: member[:name], img: member[:img], goal: member[:goal], reflection: member[:reflection])
end
