import http from 'k6/http';
import { sleep } from 'k6';
import faker from "k6/x/faker"

export default function () {
  http.get('https://blazedemo.com/');
  sleep(1);
  let name = faker.name();
  console.log (name);
}