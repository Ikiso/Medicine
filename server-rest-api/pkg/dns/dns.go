package dns

import (
	"context"
	"github.com/cloudflare/cloudflare-go"
)

type DomainMeneger interface {
	addCNAMERecord(ctx context.Context, subdomain string) error
}

type Services struct {
	client      *cloudflare.API
	email       string
	cnameTarget string
}

func NewServices(client *cloudflare.API, email, cnameTarget string) *Services {
	return &Services{
		client:      client,
		email:       email,
		cnameTarget: cnameTarget,
	}
}

func (s *Services) addCNAMERecord(ctx context.Context, subdomain string) error {
	id, err := s.client.ZoneIDByName(s.email)
	if err != nil {
		return err
	}

	//TODO: enable proxy
	proxied := true

	_, err = s.client.CreateDNSRecord(ctx, id, cloudflare.DNSRecord{
		Name:    subdomain,
		Type:    "CNAME",
		Content: s.cnameTarget,
		TTL:     1,
		Proxied: &proxied,
	})

	return err
}
