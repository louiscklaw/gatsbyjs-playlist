#!/usr/bin/env bats

@test "helloworld firebase function" {
  result="$(curl -s http://localhost:5001/fir-tryout-f4e7a/us-central1/helloWorld)"
  [ "$result" = "Hello from Firebase!" ]
}

@test "test receiving json" {
  result="$(curl -s -d '{"no_target_csv": "{ target_csv: 'https://not_exist.hk/opendata/cev/cyberport_event.csv' }"}' -H "Content-Type: application/json" -X POST http://localhost:5001/fir-tryout-f4e7a/us-central1/curl_fetch)"
  [ "$result" = "{\"result\":\"error\"}" ]
}
