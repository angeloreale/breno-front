const PortfolioData = {
  portfolio: [
    {
      company: 'Honda',
      description: 'Maintaining and developing for Honda Brasil official website across a myriad of business units such as Automobiles, Customer Service and Institutional.',
      year: '2019',
      categories: ['Web Development'],
      bg_image: require('../../assets/images/portfolio/honda.jpg'),
      responsabilities: 'Creating landing pages, implementing components according to a design system and product design layouts, develop custom Drupal modules, develop and maintain Rest and CRUD APIs, use Drupal’s Entity API framework, conducting a research on decoupling the front end with React and Vue, implementing a CI/CD pipeline, Dockerizing local environments with Lando, etc. All done under an Agile methodology.',
      technologies: 'HTML, CSS, Javascript ES6+, Drupal 8, Twig, React, Vue, PHP, Gulp, Webpack, MySQL, Lando, Docker, Buddy.',
      link: 'https://honda.com.br'
    },
    {
      company: 'Uber',
      description: 'Mantaining of Uber Support Centre website.',
      year: '2019',
      categories: ['Wordpress'],
      bg_image: require('../../assets/images/portfolio/uber.jpg'),
      responsabilities: 'Improving its accessibility, implementing new designs and improving its infrastructure by allowing, for instance http requests to be redirected to https via nginx.',
      technologies: 'Wordpress, PHP, HTML, CSS, Javascript, AWS, nginx.',
      link: 'https://help.uber.com'
    },
    {
      company: 'Kroton',
      description: 'Developing integrations between Kroton\'s official APIs and landing pages for 12 schools of the group Somos.',
      year: '2019',
      categories: ['Web Development'],
      bg_image: require('../../assets/images/portfolio/kroton.jpg'),
      responsabilities: 'Developing and implementing the JavaScript scripts using fetch API and Singleton Design Pattern. Setting up a Lambda instance for connecting with an external API and performing the login and lead capture actions. ',
      technologies: 'CSS, JavaScript ES6, Node.js, AWS.'
    },
    {
      company: 'Braskem',
      year: '2018',
      description: 'Maintaining a legacy system developed to aid engineers in managing documents, files and images pertaining to construction works and gas pipelines.',
      categories: ['Web Development'],
      bg_image: require('../../assets/images/portfolio/braskem.jpg'),
      responsabilities: 'Create C# controllers, views, models and Rest endpoints to dialogue with the front end using Javascript, jQuery, HTML and CSS, of the system based on layouts designed by me, and implemented on an Agile methodology basis.',
      technologies: 'C#, .NET MVC 6, Oracle 11g, Javascript, jQuery, HTML, CSS, Razor.'
    }
  ]
}

export default PortfolioData
