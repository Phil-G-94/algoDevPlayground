interface IJoke {
  id: number;
  setup: string;
  punchLine: string;
}

interface JokeAPI {
  jokes: IJoke[];
}

interface JokeResult {
  saySetup: () => string;
  sayPunchLine: () => string;
}

async function sayJoke(apiUrl: string, jokeId: number): Promise<JokeResult> {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data || !Array.isArray(data.jokes)) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find((j: IJoke) => j.id === jokeId);

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}
