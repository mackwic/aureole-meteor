
if Meteor.isClient
  Session.setDefault 'counter', 0

  Template.infos.helpers {
    counter: -> Persos.find().count()
  }

  Template.perso_list.helpers {
    persos: -> Persos.find()
  }

if Meteor.isServer
  Meteor.startup ->
    # code to run at startup
    null
