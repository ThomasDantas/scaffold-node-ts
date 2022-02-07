import paths from '@/main/docs/paths'
import components from '@/main/docs/components'
import schemas from '@/main/docs/schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: '4show - Documentação Api Rest',
    description: 'Essa é a documentação da API do 4show - NodeJs usando Typescript, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: '4show',
      email: '4show.live',
      url: '4show.live.com'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  externalDocs: {
    description: 'Link para o 4show',
    url: 'https://4show.live.com'
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }, {
    name: 'User',
    description: 'APIs relacionadas aos dados do Usuario'
  }],
  paths,
  schemas,
  components
}
