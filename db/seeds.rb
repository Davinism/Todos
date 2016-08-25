# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create!({title: "Laundry", body:"Out of underwear.  Fix that!", done: false})
Todo.create!({title: "Study", body: "Falling behind", done: false})
Todo.create!({title: "See friends", body: "Don't be a loner", done: true})
