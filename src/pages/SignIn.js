import React from 'react';

export default function SignIn() {
  return (
    <form action="/authenticate" method="POST">
      <fieldset>
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          inputmode="email"
          autocomplete="username"
        />
      </fieldset>
      <fieldset>
        <label for="password">Senha</label>
        <input type="password" id="password" autoComplete="currentPassword" />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}
