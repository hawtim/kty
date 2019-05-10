const source = tinify.fromFile("large.jpg");
source.store({
  service: "s3",
  aws_access_key_id: "AKIAIOSFODNN7EXAMPLE",
  aws_secret_access_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  region: "us-west-1",
  headers: {
    "Cache-Control": "public, max-age=31536000"
  },
  path: "example-bucket/my-images/optimized.jpg"
});