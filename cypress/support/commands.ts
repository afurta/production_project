import * as CommandAll  from './commands/common'
import * as ProfileCommands  from './commands/profile'
import * as ArticleCommands  from './commands/article'
import * as CommentCommands  from './commands/comment'
import * as RatingCommands  from './commands/rating'

Cypress.Commands.addAll(CommandAll)
Cypress.Commands.addAll(ProfileCommands)
Cypress.Commands.addAll(ArticleCommands)
Cypress.Commands.addAll(CommentCommands)
Cypress.Commands.addAll(RatingCommands)

