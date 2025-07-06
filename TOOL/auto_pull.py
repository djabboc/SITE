import time
import subprocess
import sys

def countdown(seconds):
    for i in range(seconds, 0, -1):
        sys.stdout.write(f"\r下次git pull将在 {i} 秒后执行...")
        sys.stdout.flush()
        time.sleep(1)
    print("\n正在执行git pull...")

def git_pull():
    try:
        result = subprocess.run(["git", "pull"], check=True, capture_output=True, text=True)
        print(result.stdout)
        print("git pull执行成功！")
    except subprocess.CalledProcessError as e:
        print(f"git pull执行失败: {e.stderr}")

def main():
    minutes = 60
    interval = 5 * minutes  # 5分钟
    while True:
        countdown(interval)
        git_pull()

if __name__ == "__main__":
    main()


