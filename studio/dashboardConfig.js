export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '626d306e07bb4f76dd064b6a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7wpqnmgz',
                  apiId: '025fb755-0eb6-44a3-a484-71d96e537681'
                },
                {
                  buildHookId: '626d306e14958c76eff182fe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5d1rc3ca',
                  apiId: 'e14e04f2-7d43-4f8c-abb8-17e2a3bd950c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/progwithraj/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5d1rc3ca.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
