module.exports = {
  apps : [{
    name: 'portfolio',
    script: 'node_modules/@angular/cli/bin/ng',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'serve',
    cwd: 'biblical-hebrew-fe',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-17-128-95.us-east-2.compute.amazonaws.com',
	  key: '~/.ssh/first-group.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:durai-rajendran/portfolio.git',
      path : '/home/ubuntu/portfolio',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
