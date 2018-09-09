export function githubUrl(): string {
  return 'https://www.github.com/outline';
}

export function githubIssuesUrl(): string {
  return 'https://www.github.com/outline/outline/issues';
}

export function blogUrl(): string {
  return 'https://medium.com/getoutline';
}

export function twitterUrl(): string {
  return 'https://twitter.com/outlinewiki';
}

export function mailToUrl(): string {
  return 'mailto:hello@getoutline.com';
}

export function developers(): string {
  return '/developers';
}

export function changelog(): string {
  return '/changelog';
}

export function signin(service: string = 'slack'): string {
  return `/auth/${service}`;
}

export function about(): string {
  return '/about';
}

export function privacy(): string {
  return '/privacy';
}
