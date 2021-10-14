import os
import uuid
import boto3


# aws_name = os.environ.get("AWS_NAME")
# aws_access_id = os.environ.get("AWS_ACCESS_ID")
# aws_secret_key = os.environ.get("AWS_SECRET_KEY")
# aws_public_root_url = os.environ.get("AWS_PUBLIC_ROOT_URL")

# s3_client = boto3.client(
#     "s3",
#     region_name="ap-seoul-1",
#     aws_access_key_id=aws_access_id,
#     aws_secret_access_key=aws_secret_key,
#     endpoint_url=f"https://{aws_name}.compat.objectstorage.ap-seoul-1.oraclecloud.com",
# )

s3_client = boto3.client(
    's3',
    region_name="ap-seoul-1",
    aws_access_key_id="1f410b18c3dd654faf577fabd249f904537e8ae2",
    aws_secret_access_key="eIQoKHAeZ/onns3R1fRwiz6/eMQbX96ljgP40v1Wl9M=",
    endpoint_url="https://cnmbqlit2yns.compat.objectstorage.ap-seoul-1.oraclecloud.com/"
)
aws_public_root_url = 'https://objectstorage.ap-seoul-1.oraclecloud.com/p/gxordASJkmD_zzzIGFGKnWoFlj-sls661XQ_d_6JlIJAYjwo5EXme1Mlw0TcqOm8/n/cnmbqlit2yns/b/delivery_app/o/'


def boto3_image_upload(file):
    file_name = uuid.uuid4().hex
    file_type = file.filename.split(".")[-1]
    file_path = f"/images/{file_name}.{file_type}"
    s3_client.put_object(
        Bucket="delivery_app", Body=file, Key=file_path, ContentType=file.content_type
    )
    result = aws_public_root_url + file_path
    return result


def boto3_image_delete(image_url):
    file_name = "/" + image_url.split("//")[-1]
    s3_client.delete_object(Bucket="delivery_app", Key=file_name)
