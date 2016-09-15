'use strict'

const Schema = use('Schema')

class PostsSchema extends Schema {

  up() {
    this.create('posts', (table) => {
      table.increments()
      table.string('title')
      table.text('content')
      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }

}

module.exports = PostsSchema
