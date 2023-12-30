/** @type {import('next').NextConfig} */

console.log(process.versions)

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};
