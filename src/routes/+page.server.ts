import { GITHUB_USERNAME, GITHUB_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export interface ContributionsResponse extends Response {
	data: {
		user: {
			name: string;
			contributionsCollection: {
				contributionCalendar: {
					colors: string[];
					totalContributions: number;
					weeks: {
						firstDay: string;
						contributionDays: Array<{
							color: string;
							contributionCount: number;
							date: string;
							weekday: number;
						}>;
					}[];
				};
			};
		};
	};
}

export const load: PageServerLoad = async () => {
	const headers = {
		Authorization: `bearer ${GITHUB_TOKEN}`
	};

	const body = {
		query: `query {
        user(login: "${GITHUB_USERNAME}") {
          name
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }`
	};

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers,
		body: JSON.stringify(body)
	})
		.then<ContributionsResponse>((res) => {
			if (res.status === 200) return res.json();

			throw new Error(
				`Something went wrong! Error status: ${res.status}, Error text: ${res.statusText}`
			);
		})
		.catch(() => null);

	if (response && response.data) return response.data;
};
