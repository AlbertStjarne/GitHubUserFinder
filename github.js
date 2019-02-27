class GitHub {
  constructor() {
    this.client_id = 'YOUR-ID-HERE';
    this.client_secret = 'YOUR-ID-HERE';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  

    const profile = await profileResponse.json();

    return {
      //profile: profile
      profile     // same as above in ES6
    }
  }
}

